# Date-convert-AD-BS

Lightweight JS Module to convert AD to BS and vice-versa.

## Install

```
npm install date-convert-ad-bs

pnpm install date-convert-ad-bs

yarn add date-convert-ad-bs
```

## Usage

How to Use

```javascript
<script>
  import {ADTOBS, BSTOAD} from 'date-convert-ad-bs';
  console.log(ADTOBS(2023,5,29)); // ~ 2080-03-15
  console.log(BSTOAD(2080,2,15)); // ~ 2023-06-29
</script>
```
