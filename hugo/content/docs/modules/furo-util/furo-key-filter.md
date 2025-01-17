---
title: furo-key-filter
description: keyboard event filter
weight: 50
---

# furo-key-filter
**@furo/util** <small>v2.0.5</small>
<br>`import '@furo/util/src/furo-key-filter.js';`<small>
<br>exports `<furo-key-filter>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *keyboard event filter*</small>

{{% api "_furo-key-filter-head.md" %}}

`furo-key-filter`
Allows only defined keyboard events to pass through

```html
<!-- note the asterisk on other-component keydown. Because filter needs the keyboard event. -->
<other-component @-keydown="--keydown(*)"></other-component>
<furo-key-filter
    ƒ-filter="--keydown" @-matched="--escapePressed"
    keys="Escape"
    ></furo-key-filter>
```

{{% api "_furo-key-filter-description.md" %}}


## Attributes and Properties
{{% api "_furo-key-filter-properties.md" %}}




### **keys**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">keys</span>
</small>

Coma separated list with allowed keys to pass. i.e "Enter, ArrowUp"
<br><br>

### **shift**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">shift</span>
</small>

Modifier key **shift** must be pressed too to match
<br><br>

### **alt**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">alt</span>
</small>

Modifier key **alt** must be pressed too to match
<br><br>

### **command**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">command</span>
</small>

Alias for meta.

Modifier key **meta** must be pressed too to match.
<br><br>

### **meta**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">meta</span>
</small>

Modifier key **meta** must be pressed too to match
<br><br>

### **control**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">control</span>
</small>

Modifier key **control** must be pressed too to match
<br><br>
## Events
{{% api "_furo-key-filter-events.md" %}}

### **matched**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-matched</span>
→ <small>`KeyboardEvent`</small>

 Fired when key matches the options
<br><br>

## Methods
{{% api "_furo-key-filter-methods.md" %}}


### **filter**
<small>**filter**(*keyboardEvent* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-filter</span>

Check the event and dispatch matched when the conditions are fulfilled.

- <small>*keyboardEvent* </small>
<br><br>










{{% api "_furo-key-filter-footer.md" %}}
{{% api "_furo-key-filter-scripts.md" %}}
