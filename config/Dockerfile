FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /config
WORKDIR /config
COPY requirements.txt /config/
RUN pip install --upgrade pip && pip install -r requirements.txt
ADD . /config/
EXPOSE 8000