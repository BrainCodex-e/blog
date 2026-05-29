# Python venv

A quick recipe for virtual environments that won’t haunt you later.

## Create + activate

```bash
python3 -m venv venv
source venv/bin/activate
```

## Install deps

```bash
python -m pip install -U pip
pip install -r requirements.txt
```

## Freeze deps

```bash
pip freeze > requirements.txt
```

## Deactivate

```bash
deactivate
```

## Common gotchas

- If `python` isn’t found, use `python3`.
- If VS Code picks the wrong interpreter, select `./venv/bin/python`.
