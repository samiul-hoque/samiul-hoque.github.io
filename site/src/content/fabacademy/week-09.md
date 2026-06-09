---
title: "Embedded Programming"
week: 9
assignment: "Read a microcontroller datasheet; program a board using multiple languages and environments."
heroImage: "/images/fabacademy/week-09/attinytest_arduino.gif"
gallery:
  - "/images/fabacademy/week-09/datasheetPin.jpg"
  - "/images/fabacademy/week-09/datasheet_block_diagram.jpg"
  - "/images/fabacademy/week-09/attinytest_arduino.gif"
  - "/images/fabacademy/week-09/atmelstudio.jpg"
  - "/images/fabacademy/week-09/atmelfabisp.jpg"
  - "/images/fabacademy/week-09/stm32datasheet.jpg"
  - "/images/fabacademy/week-09/st32dev.jpg"
  - "/images/fabacademy/week-09/mbed1.jpg"
  - "/images/fabacademy/week-09/mbed2.jpg"
---

## Assignment

Read a microcontroller datasheet; program a board using at least two different programming languages or environments.

## ATTiny44 — datasheet deep dive

**Architecture:** RISC, 8-bit AVR, 14-pin SOIC.

**Key specs:** 4KB flash, 256B EEPROM, 256B SRAM, 20 MIPS @ 20MHz, 1.8–5.5V operating range.

**Peripherals:** 8-channel 10-bit ADC, 8-bit and 16-bit timers, PWM outputs, SPI, USI (universal serial interface), watchdog timer.

The datasheet block diagram and pin multiplexing table are worth studying carefully — the ATTiny44 has fewer pins than it looks like it should, so understanding which functions share pins is critical for layout.

## Environment 1 — Arduino IDE

Used the ATTinyCore board manager (`http://drazzy.com/package_drazzy.com_index.json`). Easy setup, large library ecosystem. The compiled HEX for a simple blink was ~930 bytes — larger than bare C but acceptable for 4KB flash.

## Environment 2 — Atmel Studio + GCC C

Same blink program in C: ~182-byte HEX. Much more efficient. Steeper learning curve.

FabISP as an external tool in Atmel Studio: configured avrdude with `-c usbtiny -p attiny44 -Uflash:w:"$(ProjectDir)Debug\\$(TargetName).hex":i` to flash directly from the IDE.

## Bonus — STM32F103C8T6 (Blue Pill)

Wanted to explore 32-bit ARM. The STM32F103C8T6 is a Cortex-M3 running at 72MHz with 64/128KB flash and 20KB SRAM. Planned a custom LQFP48 breakout but the pinout complexity wasn't worth it for a test — used the Blue Pill dev board instead.

**STM32duino:** Added board manager URL, connected via ST-Link v2 (3.3V / SWO / SWCLK / GND). Compiled HEX: 32,768 bytes.

**Arm Mbed Online:** Created an account, added the Nucleo-F103RB device, compiled online, downloaded `.bin`, uploaded via ST-Link Utility. UART output monitored via FTDI in 3.3V mode.
