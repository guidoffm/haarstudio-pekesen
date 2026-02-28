#!/usr/bin/env sh
set -e
REPO="guidoffm/haarstudio-pekesen"
IMAGE="ghcr.io/$REPO"
VERSION=$(node -p "require('./package.json').version")

echo "Building $IMAGE:$VERSION (linux/amd64, linux/arm64) ..."
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t "$IMAGE:$VERSION" \
  -t "$IMAGE:latest" \
  --label org.opencontainers.image.source=https://github.com/$REPO \
  --push \
  .
echo "Done: $IMAGE:$VERSION"
