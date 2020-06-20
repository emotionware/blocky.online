

import sys, os, codecs, re
import json
import urllib
import urllib.request
import smtplib
import csv
import io
import time
from random import randint,uniform,random
from urllib.parse import unquote
from email.message import EmailMessage
from flask_mail import Mail, Message
from datetime import datetime
from flask import Flask,  jsonify,request, render_template, session,redirect, make_response
from flask import send_from_directory
import flask_excel as excel
from email.utils import make_msgid
import mimetypes
from os import listdir
from os.path import isfile, join
from werkzeug.utils import secure_filename
import os.path
from os import path
from _4TPyModel import app


#String Connection
from _4TPyModel.code.dbstring import hostx
from _4TPyModel.code.dbstring import userx
from _4TPyModel.code.dbstring import passwdx
from _4TPyModel.code.dbstring import databasex
from _4TPyModel.code.dbstring import portx
from _4TPyModel.code.dbstring import GMTZone


# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app.wsgi_app

#show errors
app.debug = True

app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True

#Required for manage Sessions Var
app.secret_key = 'You Will Never Guess'


@app.route('/')
def start():
    #return render_template('config/home.html',topmenu=topmenutemplate())
    return render_template('home.html')

@app.route('/<path:filename>', methods=['GET', 'POST'])
def index(filename):
    filename = filename or 'index.html'
    if request.method == 'GET':
        return send_from_directory('.', filename)





