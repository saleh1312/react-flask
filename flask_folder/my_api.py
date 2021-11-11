from flask import Flask, redirect, url_for, request,jsonify,request
import base64
import json
import cv2
from flask_cors import CORS
from image_proc import proc_img


img = cv2.imread(r'img1.jpg')
module=proc_img()


app = Flask(__name__)
CORS(app)

@app.route('/get_image',methods = ['POST'])
def login():
    data=request.json
    proc_img=module.call(data["img"])
    return jsonify({"img":proc_img})

app.run()