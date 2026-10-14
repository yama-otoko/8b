from pathlib import Path
from math import cos, pi, sin

from reportlab.lib.colors import Color, HexColor
from reportlab.lib.pagesizes import landscape
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "bersen-pajaziti-business-card.pdf"

INCH = 72
TRIM_W = 3.5 * INCH
TRIM_H = 2.0 * INCH
BLEED = 0.125 * INCH
PAGE_W = TRIM_W + 2 * BLEED
PAGE_H = TRIM_H + 2 * BLEED

NAVY = HexColor("#07101F")
PANEL = HexColor("#0D1829")
WHITE = HexColor("#F6F8FC")
MUTED = HexColor("#9BA8BA")
CYAN = HexColor("#63B9E8")
PALE = HexColor("#BCDFF2")
INDIGO = HexColor("#5869D8")
GRID = Color(0.53, 0.65, 0.79, alpha=0.10)
LINE = Color(0.68, 0.76, 0.87, alpha=0.22)


def line(c, x1, y1, x2, y2, color, width=0.5, dash=None):
    c.saveState()
    c.setStrokeColor(color)
    c.setLineWidth(width)
    if dash:
        c.setDash(dash)
    c.line(x1, y1, x2, y2)
    c.restoreState()


def background(c):
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    step = 23
    x = BLEED - step
    while x < PAGE_W:
        line(c, x, 0, x, PAGE_H, GRID, 0.35)
        x += step
    y = BLEED - step
    while y < PAGE_H:
        line(c, 0, y, PAGE_W, y, GRID, 0.35)
        y += step


def crop_marks(c):
    """Short hairline crop marks entirely inside the bleed area."""
    c.saveState()
    c.setStrokeColor(Color(1, 1, 1, alpha=0.6))
    c.setLineWidth(0.3)
    gap, length = 2.2, 5.2
    left, right = BLEED, PAGE_W - BLEED
    bottom, top = BLEED, PAGE_H - BLEED
    for x in (left, right):
        c.line(x, 0.8, x, bottom - gap)
        c.line(x, top + gap, x, PAGE_H - 0.8)
    for y in (bottom, top):
        c.line(0.8, y, left - gap, y)
        c.line(right + gap, y, PAGE_W - 0.8, y)
    c.restoreState()


def draw_mark(c, x, y, scale=1.0, muted=False):
    """A compact vector interpretation of the Eightbits segmented 8 mark."""
    bar_w = 20 * scale
    bar_h = 4.6 * scale
    vert_w = 4.6 * scale
    vert_h = 16.5 * scale
    gap = 4.3 * scale
    radius = 2.0 * scale
    c.saveState()
    if muted:
        c.setFillColor(Color(0.39, 0.73, 0.91, alpha=0.12))
    else:
        c.setFillColor(PALE)
    c.roundRect(x, y + vert_h * 2 + gap * 2, bar_w, bar_h, radius, fill=1, stroke=0)
    c.roundRect(x, y + vert_h + gap, bar_w, bar_h, radius, fill=1, stroke=0)
    if not muted:
        c.setFillColor(WHITE)
    c.roundRect(x, y, bar_w, bar_h, radius, fill=1, stroke=0)
    for yy in (y + bar_h + gap, y + bar_h + vert_h + gap * 2):
        c.roundRect(x, yy, vert_w, vert_h, radius, fill=1, stroke=0)
        c.roundRect(x + bar_w - vert_w, yy, vert_w, vert_h, radius, fill=1, stroke=0)
    c.restoreState()


def orbit(c, cx, cy, radius):
    c.saveState()
    c.setLineWidth(0.45)
    c.setStrokeColor(Color(0.39, 0.73, 0.91, alpha=0.32))
    for factor in (1.0, 0.72, 0.43):
        r = radius * factor
        c.circle(cx, cy, r, fill=0, stroke=1)
    c.setDash(1.5, 2.5)
    c.circle(cx, cy, radius * 0.86, fill=0, stroke=1)
    c.setDash()
    line(c, cx - radius * 1.15, cy, cx + radius * 1.15, cy, Color(0.39, 0.73, 0.91, alpha=0.24), 0.4)
    line(c, cx, cy - radius * 1.15, cx, cy + radius * 1.15, Color(0.39, 0.73, 0.91, alpha=0.24), 0.4, [1.4, 2.2])
    for angle, color in ((0.18, CYAN), (0.70, INDIGO), (1.26, PALE), (1.68, CYAN)):
        a = angle * pi
        x = cx + cos(a) * radius * 0.86
        y = cy + sin(a) * radius * 0.86
        c.setFillColor(color)
        c.circle(x, y, 1.9, fill=1, stroke=0)
    c.restoreState()


def brand_lockup(c, x, y):
    draw_mark(c, x, y, 0.42)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(x + 14.2, y + 8.4, "eightbits")
    c.setFillColor(PALE)
    c.drawString(x + 47.6, y + 8.4, ".us")


def front(c):
    background(c)
    orbit(c, PAGE_W - 37, PAGE_H - 44, 49)
    brand_lockup(c, BLEED + 15, PAGE_H - BLEED - 29)

    # Deliberate cyan registration detail from the landing-page header.
    line(c, BLEED + 15, PAGE_H - BLEED - 37, PAGE_W - BLEED - 15,
         PAGE_H - BLEED - 37, LINE, 0.45)
    c.setFillColor(CYAN)
    c.rect(PAGE_W / 2 - 1.3, PAGE_H - BLEED - 38.3, 2.6, 2.6, fill=1, stroke=0)

    x = BLEED + 15
    c.setFillColor(CYAN)
    c.setFont("Courier-Bold", 5.6)
    c.drawString(x, BLEED + 59, "/ CONTACT")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 21)
    c.drawString(x, BLEED + 34, "BERSEN")
    c.setFillColor(PALE)
    c.drawString(x, BLEED + 14, "PAJAZITI")

    info_x = PAGE_W - BLEED - 103
    info_y = BLEED + 38
    c.setFillColor(MUTED)
    c.setFont("Courier", 5.4)
    c.drawString(info_x, info_y + 22, "PHONE")
    c.drawString(info_x, info_y - 2, "EMAIL")
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 8.1)
    c.drawString(info_x, info_y + 12, "+383 45 677 243")
    c.drawString(info_x, info_y - 12, "bersen@eightbits.us")
    crop_marks(c)
    c.showPage()


def back(c):
    background(c)
    # Soft geometric field; all vector so it remains crisp in print.
    orbit(c, PAGE_W / 2, PAGE_H / 2 + 9, 67)
    draw_mark(c, PAGE_W / 2 - 24, PAGE_H / 2 - 37, 2.4, muted=True)
    draw_mark(c, PAGE_W / 2 - 10, PAGE_H / 2 - 17, 1.0)

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 12.5)
    c.drawCentredString(PAGE_W / 2, BLEED + 21, "AUTOMATION FOR CRITICAL WORK.")
    c.setFillColor(CYAN)
    c.setFont("Courier", 6.2)
    c.drawCentredString(PAGE_W / 2, BLEED + 10, "EIGHTBITS.US  /  PRISHTINA - NEW YORK - REMOTE")
    crop_marks(c)
    c.showPage()


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=(PAGE_W, PAGE_H), pageCompression=1)
    c.setTitle("Bersen Pajaziti - Eightbits Business Card")
    c.setAuthor("Eightbits")
    c.setSubject("Two-sided business card, 3.5 x 2 in trim with 0.125 in bleed")
    front(c)
    back(c)
    c.save()
    print(OUT)


if __name__ == "__main__":
    main()
