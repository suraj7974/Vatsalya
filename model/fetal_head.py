import torch
from model import UNET  # Import the UNET class from model.py
import cv2
import numpy as np
import torchvision.transforms as transforms
from PIL import Image
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

# Load the model and move to device
device = torch.device(
    "cuda") if torch.cuda.is_available() else torch.device("cpu")
model = UNET(1, 1)  # Assuming UNET is defined in model.py
state_dict = torch.load(
    r"C:\suraj\ai\HC head\model_epoch_2.pth")  # Verify model path
model.load_state_dict(state_dict)
model.eval()
model.to(device)

# Path to the image file
image_path = r"C:\suraj\ai\HC head\images\068_HC.png"

# Load the image
img = cv2.imread(image_path)

# Convert the image from BGR to RGB (OpenCV loads images as BGR by default)
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Display the image
plt.imshow(img_rgb)
plt.axis('off')  # Turn off axis
plt.show()



# Image preprocessing
test_image = Image.open(r"C:\suraj\ai\HC head\images_masks\068_HC_Mask.png").convert(
    'L')  # Replace with correct image path
transform = transforms.Compose([transforms.Resize((572, 572)),
                                transforms.ToTensor(),
                                transforms.Normalize((0.5,), (0.5,))])
test_tensor = transform(test_image).unsqueeze(0).to(device)

# Make prediction and post-process mask
with torch.no_grad():
    prediction = model(test_tensor)
    prediction = torch.sigmoid(prediction)

threshold = 0.5  # Adjust if needed
mask = prediction > threshold
mask = mask.reshape(572, 572)

# Load image for contour and ellipse fitting
im = cv2.imread(r"C:\suraj\ai\HC head\images_masks\068_HC_Mask.png")
if im is not None:
    im_gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(im_gray, 127, 255, 0)
    contours, _ = cv2.findContours(
        thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    ellipse = None
    if len(contours) > 0 and len(contours[0]) >= 5:
        ellipse = cv2.fitEllipse(contours[0])

    if ellipse is not None:
        center, axes, angle = ellipse
        semi_axes_a = axes[0] / 2
        semi_axes_b = axes[1] / 2

        # Calculate head circumference
        head_circumference = ((np.pi * (semi_axes_a + semi_axes_b))/100)+2.56
        print("Head circumference:", head_circumference)

        # Calculate gestational age
        bpd_measurement_mm = max(axes)
        gestational_age_weeks = 1.65 + 0.038 * bpd_measurement_mm
        GA = gestational_age_weeks
        if (GA <= 9):
            print("Fetus is less than 8 Menstrual Weeks")
        else:print("Estimated Gestational Age:", round(
                gestational_age_weeks, 1), "weeks")

        # Calculate estimated fetal weight
        if (GA >= 17):
            EFW = -26256.56 + 4222.827 * GA - 251.9597 * \
                GA**2 + 6.623713 * GA**3 - 0.0628939 * GA**4
            print("Estimated Fetal Weight:", round(EFW, 2), "grams")

# Visualize contours and ellipse (optional)
im_with_contours = im.copy()
cv2.drawContours(im_with_contours, contours, -1, (0, 255, 0), 2)
cv2.ellipse(im_with_contours, ellipse, (0, 0, 255), 2)
cv2.imshow("Contours and Ellipse", im_with_contours)
cv2.waitKey(0)  # Corrected line: waitKey with a capital K
cv2.destroyAllWindows()
