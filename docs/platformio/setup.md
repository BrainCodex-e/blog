# :wrench: Platform IO Setup Guide

This guide walks through the complete setup process for Platform IO development on Linux, including USB serial port configuration for Arduino/ESP32 boards.

## :package: Prerequisites

Before starting, ensure you have:

- VS Code installed
- Python 3.x
- USB cable for your board
- Linux system with sudo access

## Step 1: Install Platform IO Extension

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "PlatformIO IDE"
4. Click **Install**
5. Restart VS Code after installation

## Step 2: USB Serial Port Access

When connecting Arduino or ESP32 boards via USB, Linux requires proper permissions to access the serial port (typically `/dev/ttyACM0` or `/dev/ttyUSB0`).

### Check Your Device

First, connect your board and identify the port:

```bash
ls -l /dev/ttyACM*
ls -l /dev/ttyUSB*
```

You'll see something like:

```
crw-rw---- 1 root dialout 166, 0 Jan 14 10:30 /dev/ttyACM0
```

### Add User to dialout Group

The device is owned by the `dialout` group. Add your user to this group:

```bash
sudo usermod -a -G dialout $USER
```

!!! warning "Logout Required"
    You must **log out and log back in** (or reboot) for the group membership to take effect!

### Verify Group Membership

After logging back in, verify you're in the dialout group:

```bash
groups
```

You should see `dialout` in the output.

### Alternative: Set Permissions with chmod

If you need immediate access without logging out, you can temporarily set permissions:

```bash
sudo chmod 666 /dev/ttyACM0
```

!!! note "Temporary Solution"
    This permission change is temporary and will reset after unplugging the device or rebooting. The `usermod` method above is the permanent solution.

## Step 3: Create Your First Project

1. Click the PlatformIO icon in the left sidebar (alien head)
2. Select **"New Project"**
3. Configure your project:
   - **Name**: Your project name
   - **Board**: Select your board (e.g., "Arduino Uno", "ESP32 Dev Module")
   - **Framework**: Arduino
4. Click **Finish**

## Step 4: Verify Serial Connection

### Test the Connection

```bash
# Check if port is accessible
ls -l /dev/ttyACM0

# Monitor the port (Ctrl+C to exit)
cat /dev/ttyACM0
```

### Configure platformio.ini

In your project, open `platformio.ini` and verify/add:

```ini
[env:your_board]
platform = atmelavr  ; or espressif32 for ESP32
board = uno          ; or esp32dev for ESP32
framework = arduino
monitor_speed = 115200
upload_port = /dev/ttyACM0
monitor_port = /dev/ttyACM0
```

## Step 5: Upload and Monitor

### Build and Upload

Click the **Upload** button (→) in the PlatformIO toolbar, or use:

```bash
pio run --target upload
```

### Open Serial Monitor

Click the **Serial Monitor** button (plug icon) or use:

```bash
pio device monitor
```

## Common Issues and Solutions

### Permission Denied Error

```
Error: cannot open /dev/ttyACM0: Permission denied
```

**Solution**: Follow Step 2 to add user to dialout group and log out/in.

### Port Not Found

```
Error: Please specify `upload_port` for environment
```

**Solution**: The board might be on a different port:

```bash
# List all connected serial devices
pio device list

# Or use dmesg to see recently connected devices
dmesg | grep tty
```

### Port Changes After Reconnect

If your port changes between `/dev/ttyACM0` and `/dev/ttyACM1`:

```bash
# Create a udev rule for consistent naming
sudo nano /etc/udev/rules.d/99-platformio.rules
```

Add:

```
SUBSYSTEMS=="usb", ATTRS{idVendor}=="2341", ATTRS{idProduct}=="0043", MODE="0666"
```

Reload rules:

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
```

## Quick Reference

### Essential Commands

```bash
# Initialize new project
pio project init --board uno

# Build project
pio run

# Upload to board
pio run --target upload

# Clean build files
pio run --target clean

# Open serial monitor
pio device monitor

# List connected devices
pio device list

# Update platforms
pio platform update
```

### File Permissions Quick Fix

```bash
# One-line setup for dialout group
sudo usermod -a -G dialout $USER && echo "Please log out and log back in"

# Check current port
ls -l /dev/ttyACM0 /dev/ttyUSB0 2>/dev/null

# Temporary permission (until reboot/unplug)
sudo chmod 666 /dev/ttyACM0
```

## Next Steps

- ✅ Board connected and recognized
- ✅ Serial port accessible
- ✅ Platform IO configured
- 🚀 Ready to start coding!

Check out the project examples to begin your embedded development journey.

---

*Last updated: January 14, 2026*
