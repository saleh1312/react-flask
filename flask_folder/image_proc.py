import cv2
import numpy as np
import base64
import matplotlib.pyplot as plt

class proc_img:
    def __init__(self):
        print("......proc_image statr....")
        
    
    def calldecode(self,imgbase64):
        jpg_original = base64.b64decode(imgbase64[22:])
        jpg_as_np = np.frombuffer(jpg_original, dtype=np.uint8)
        img = cv2.imdecode(jpg_as_np, flags=1)
        return img
        
    def callencode(self,img):
        string = base64.b64encode(cv2.imencode('.jpg', img)[1]).decode()
        string="data:image/jpeg;base64,"+string
        return string
    
    def proc(self,img):
        copy= img.copy()
        copy[:,:,0]+=80
        return copy
    def call(self,imgbase64):
        img=self.calldecode(imgbase64)
        img=self.proc(img)
        string=self.callencode(img)
        return string
        
