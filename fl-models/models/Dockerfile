FROM python:3.8-slim

WORKDIR /app

COPY main.py /app/main.py

COPY requirements.txt /app

RUN pip3 install -r requirements.txt

ADD main.py .