# Mono-Repo Library to convert AD to BS and vice-versa

This is a mono-repo contains both javascript and python library.

1. Javascript/Node Library

## Installations

```
npm install date-convert-ad-bs

pnpm install date-convert-ad-bs

yarn add date-convert-ad-bs
```

## Usage

How to Use

#### ES6 Syntax

```javascript
// ES6 import
import { ADTOBS, BSTOAD } from "date-convert-ad-bs";

console.log(ADTOBS(2023, 5, 29)); // ~ 2080-03-14
console.log(BSTOAD(2080, 2, 15)); // ~ 2023-06-30
```

### CommonJS Syntax

```javascript
const converter = require("date-convert-ad-bs");

console.log(converter.ADTOBS(2023, 5, 29)); // ~ 2080-03-14
console.log(converter.BSTOAD(2080, 2, 15)); // ~ 2023-06-30
```

2. Python Library

## Installation

You can install the package using pip:

```
pip install date-convert-ad-bs

or

pip3 install date-convert-ad-bs

```

## Usage

To use the package, simply import it and call its functions:

```python
from dateconvert import DateConvert

converter = DateConvert()

print(converter.ad_to_bs(1993,5,29))
print(converter.bs_to_ad(2050,2,11))
```
