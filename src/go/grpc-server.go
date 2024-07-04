package main

import (
	"context"
	"log"
	"net"

	"google.golang.org/grpc"
	pb "path/to/your/generated/protobuf/package"
)

// server is used to implement user.UserServiceServer.
type server struct {
	pb.UnimplementedUserServiceServer
}

// GetUser implements user.UserServiceServer
func (s *server) GetUser(ctx context.Context, in *pb.UserRequest) (*pb.UserResponse, error) {
	log.Printf("Received: %v", in.GetId())
	// In a real application, you'd query your database or other data source.
	// Here we'll just return a hardcoded response.
	return &pb.UserResponse{Id: in.GetId(), Name: "John Doe", Email: "john.doe@example.com"}, nil
}

func main() {
	// Create a new gRPC server
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterUserServiceServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
