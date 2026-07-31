from PIL import Image
import pathlib
folder = pathlib.Path('.')
images = list(folder.glob('*.jpg')) + list(folder.glob('*.png'))
print(f'Found {len(images)} images')
for src in images:
    img = Image.open(src).convert('RGB')
    w, h = img.size
    scale = max(1280/w, 800/h)
    img = img.resize((int(w*scale), int(h*scale)), Image.LANCZOS)
    img = img.crop((0, 0, 1280, 800))
    out = src.with_suffix('.webp')
    img.save(out, 'WEBP', quality=90)
    print(f'Done: {out.name} ({out.stat().st_size//1024}KB)')
print('All done!')