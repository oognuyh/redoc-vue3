# Redoc Vue3

A library that wraps the Redoc standalone version for Vue 3.
See [Redocly's redoc](https://redocly.com/redoc/) and [Vuejs](https://vuejs.org/)

## Installation

```bash
// npm
npm install @oognuyh/redoc-vue3

// yarn
yarn add @oognuyh/redoc-vue3
```

## Usage

```vue
<script setup lang="ts">
import { RedocContainer } from "@oognuyh/redoc-vue3";
</script>

<template>
  <RedocContainer
    :spec-or-spec-url="spec"
    :options="options"
  />
</template>
```
