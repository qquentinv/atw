FROM golang:1.22 as dev

RUN mkdir -p /go/src/backend
WORKDIR /go/src/backend

COPY . /go/src/backend

RUN go get -d -v
RUN go install -v

EXPOSE 8080

CMD ["/go/bin/backend"]
