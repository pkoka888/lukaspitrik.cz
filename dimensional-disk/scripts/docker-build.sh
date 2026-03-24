#!/bin/bash
# Build and deploy script for lukaspitrik.cz Docker image

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

IMAGE_NAME="lukaspitrik"
CONTAINER_NAME="lukaspitrik-web"
REGISTRY="${REGISTRY:-}"
TAG="${TAG:-latest}"

echo -e "${GREEN}Building Docker image for lukaspitrik.cz...${NC}"

# Build the image
docker build -t "${IMAGE_NAME}:${TAG}" .

echo -e "${GREEN}Image built successfully!${NC}"

# Show image size
echo -e "${YELLOW}Image size:${NC}"
docker images "${IMAGE_NAME}:${TAG}" --format "{{.Size}}"

# Test the container
echo -e "${GREEN}Testing container...${NC}"
docker run -d --name "${CONTAINER_NAME}-test" -p 8888:8080 "${IMAGE_NAME}:${TAG}"
sleep 5

if curl -s -f http://localhost:8888/ > /dev/null; then
    echo -e "${GREEN}Container test PASSED!${NC}"
    docker stop "${CONTAINER_NAME}-test" && docker rm "${CONTAINER_NAME}-test"
else
    echo -e "${RED}Container test FAILED!${NC}"
    docker stop "${CONTAINER_NAME}-test" && docker rm "${CONTAINER_NAME}-test"
    exit 1
fi

# Optional: Push to registry
if [ -n "${REGISTRY}" ]; then
    echo -e "${GREEN}Pushing to registry...${NC}"
    docker tag "${IMAGE_NAME}:${TAG}" "${REGISTRY}/${IMAGE_NAME}:${TAG}"
    docker push "${REGISTRY}/${IMAGE_NAME}:${TAG}"
    echo -e "${GREEN}Image pushed successfully!${NC}"
fi

echo -e "${GREEN}Build complete!${NC}"
echo ""
echo "To run the container:"
echo "  docker run -d -p 8080:8080 --name ${CONTAINER_NAME} ${IMAGE_NAME}:${TAG}"
echo ""
echo "To stop the container:"
echo "  docker stop ${CONTAINER_NAME}"
