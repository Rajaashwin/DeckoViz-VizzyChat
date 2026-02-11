#!/bin/bash
set -e

echo "==> Installing Python dependencies..."
pip install -r backend/requirements.txt

echo "==> Starting Vizzy Chat backend..."
python -m uvicorn backend.main:app --host 0.0.0.0 --port ${PORT:-8000}
