FROM golang:1.13-alpine

RUN mkdir -p /server
WORKDIR /server

COPY go.mod .
COPY go.sum .
RUN go mod download
ADD src src
COPY . .
RUN go build -o ./server ./src/main.go

EXPOSE 8080

CMD ["./server"]
