import urllib.request
import os

# Configuration
TARGET_DIR = "client/public/videos"
VIDEOS = [
    {
        "name": "motorized.mp4",
        "url": "https://videos.pexels.com/video-files/7578546/7578546-hd_1920_1080_30fps.mp4"
    },
    {
        "name": "lifestyle.mp4",
        "url": "https://videos.pexels.com/video-files/3761327/3761327-hd_1920_1080_25fps.mp4"
    },
    {
        "name": "cinema.mp4",
        "url": "https://videos.pexels.com/video-files/4057321/4057321-hd_1920_1080_25fps.mp4"
    }
]

# Headers to mimic a real browser
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Referer': 'https://www.pexels.com/'
}

def download_files():
    if not os.path.exists(TARGET_DIR):
        os.makedirs(TARGET_DIR)
        print(f"Created directory: {TARGET_DIR}")

    print("🚀 Starting downloads...")
    
    for video in VIDEOS:
        filepath = os.path.join(TARGET_DIR, video["name"])
        print(f"⬇️ Downloading {video['name']}...")
        
        try:
            req = urllib.request.Request(video["url"], headers=HEADERS)
            with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
                data = response.read()
                out_file.write(data)
            print(f"✅ Success! ({len(data)/1024/1024:.2f} MB)")
        except Exception as e:
            print(f"❌ Failed: {e}")

    print("\n✨ All tasks completed.")

if __name__ == "__main__":
    download_files()
