---
layout: default
title: Homepage

eleventyNavigation:
  key: Homepage
---

Hello world

## Alpine.js demo

<div x-data="{ count: 0 }">
    <button x-on:click="count++">Increment</button>
    <span x-text="count"></span>
</div>
