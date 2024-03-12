## Overview

### Data

The original dataset is from [
hc18.grand-challenge](https://hc18.grand-challenge.org/), and I've downloaded it and done the pre-processing.

### Model

![u-net-architecture.png](github_images/u-net-architecture.png)

This deep neural network is implemented with PyTorch.

### Training

The model is trained for 2 epochs (Because of low dataset available).

After 2 epochs, calculated accuracy is about 0.97.

Loss function for the training is basically just a Dice Loss (It is considered one of the best loss function for image segmentation ).

## How to use

### Run fetal_head.py 

You will see the predicted results of test image

### Results

This is the ultrasonic image passed through model.

![ultrasonic image](github_images/068_HC.png)

This is the annotated image converted from input image.

![annotated image](github_images/068_HC_Mask.png)


## Final Results

After annotated image is generated our model will calculate the Minor axis (OPD) and Major axis (BPD) of the ellipse formed on annotated image.

Then the model will measure the Head Circumference, Gestational age and Fetal Weight.

Head circumference: 16.341136711451757

Estimated Gestational Age: 19.8 weeks

Estimated Fetal Weight: 328.62 grams


## Future Goals

For Achieving more accuracy we will use Ensemble model (in this we will use multiple model and combine their predictions to create a main model which will have maximum prediction value).
