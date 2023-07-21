---
title_prefix: Guide To
title: AwesomeWM Stack Layout
description: The bling library is great, but I find a lot of it is unnecessary for my uses and while I love the mstab layout, I don't love the tab bar it provides. Instead let's make our own layout without the tab bar or bloat!
date: '2021-09-01'
banner: '/blog/stack-layout-awesomewm/aweesome-stack.png'
banner_alt: the stack layout in action in my AwesomeWM environment
---

The bling library is great, but I find a lot of it is unnecessary for my uses and while I love the mstab layout, I don't love the tab bar it provides. Instead let's make our own layout without the tab bar or bloat!

So we will be creating the same thing, a layout that divides the screen in half and stacks extra windows on the right or left of the master, which we can access easily with our alt-tab solution(future post) or taskbar.

## Guide

As always, start by importing the necessary functionality.

```Lua
local math = math
local screen = screen

local stack = {}
```

Layouts in AwesomeWM are specific to the tag they are being called from, so we will start by getting variables assigned to our present tag

```Lua
local function arrange(p, dir)
    local t = p.tag or screen[p.screen].selected_tag
    local wa = p.workarea
    local cls = p.clients

    if #cls == 0 then
        return
    end
```

Unfortunately, awesomewm uses the `master-slave` naming convention I personally find distasteful, but layouts are extremely fickle and so we should use the naming conventions the other layouts use so we don't have to see that hideous default wallpaper.

We must now assign the variables relating to the two sides of the screen, one for the master and one for the slave window that the stacking will occur on top of.

```lua
    local mstrWidthFact = t.master_width_factor

    local mstrWidth = math.floor(wa.width * mstrWidthFact)
    local mstrHeight = math.floor(wa.height)

    local slavesNumber = #cls - 1
    local slavesWidth = math.floor(wa.width - mstrWidth)
    local slavesHeight = math.floor(wa.height)

if slavesNumber == 0 then
        mstrWidth = wa.width
    end
```

Now we have to assign the positions of the two, which can change depending on if we use `stack` for stacking on the right or `stackLeft` for the converse.

```lua

    -- Places master
    local c, g = cls[1], {}

    g.height = math.max(mstrHeight, 1)
    g.width = math.max(mstrWidth, 1)

    g.y = wa.y
    g.x = (dir == "right") and (wa.x) or (wa.x + slavesWidth)


    if slavesNumber == 0 then
        g.x = wa.x
    end

    p.geometries[c] = g

```

Now, we have to limit the screen to showing the two windows and insuring the stacking is occuring on the right side.

```Lua

    if #cls == 1 then
        return
    end

    -- Places slaves
    for i = 2, #cls do
        local c, g = cls[i], {}

        g.height = math.max(slavesHeight, 1)
        g.width = math.max(slavesWidth, 1)

        g.y = wa.y
        g.x = (dir == "right") and (wa.x + mstrWidth) or (wa.x)

        p.geometries[c] = g
    end
end

```

And the final bit we will have to configure is the name of each variant of the layout, with the return statement at the end so we can require it in whatever file we append layouts to the default list. Notice in the arrange method we assing the actual side for the stacking to occur!

```lua
stack.name = "stack"
function stack.arrange(p)
    return arrange(p, "right")
end

stack.left = {}
stack.left.name = "stackLeft"
function stack.left.arrange(p)
    return arrange(p, "left")
end

```

```lua
stack.name = "stack"
function stack.arrange(p)
    return arrange(p, "right")
end
-- ########################################################################
-- ########################################################################
-- ########################################################################
stack.left = {}
stack.left.name = "stackLeft"
function stack.left.arrange(p)
    return arrange(p, "left")
end

```

## Conclusion

With the comment bars added back in, your final source code should look something like this. You will need to add this file to where ever you append to the default layouts in your configuration. I keep custom layouts in their own directory, but you are free to do as you like of course.

```Lua
local math = math
local screen = screen

local stack = {}
-- ########################################################################
-- ########################################################################
-- ########################################################################
local function arrange(p, dir)
    local t = p.tag or screen[p.screen].selected_tag
    local wa = p.workarea
    local cls = p.clients

    if #cls == 0 then
        return
    end
    -- ########################################################################
    -- ########################################################################
    -- ########################################################################
    local mstrWidthFact = t.master_width_factor

    local mstrWidth = math.floor(wa.width * mstrWidthFact)
    local mstrHeight = math.floor(wa.height)

    local slavesNumber = #cls - 1
    local slavesWidth = math.floor(wa.width - mstrWidth)
    local slavesHeight = math.floor(wa.height)
    -- ########################################################################
    -- ########################################################################
    -- ########################################################################
    if slavesNumber == 0 then
        mstrWidth = wa.width
    end
    -- ########################################################################
    -- ########################################################################
    -- ########################################################################
    -- Places master
    local c, g = cls[1], {}

    g.height = math.max(mstrHeight, 1)
    g.width = math.max(mstrWidth, 1)

    g.y = wa.y
    g.x = (dir == "right") and (wa.x) or (wa.x + slavesWidth)
    -- ########################################################################
    -- ########################################################################
    -- ########################################################################
    if slavesNumber == 0 then
        g.x = wa.x
    end

    p.geometries[c] = g

    if #cls == 1 then
        return
    end

    -- Places slaves
    for i = 2, #cls do
        local c, g = cls[i], {}

        g.height = math.max(slavesHeight, 1)
        g.width = math.max(slavesWidth, 1)

        g.y = wa.y
        g.x = (dir == "right") and (wa.x + mstrWidth) or (wa.x)

        p.geometries[c] = g
    end
end
-- ########################################################################
-- ########################################################################
-- ########################################################################
stack.name = "stack"
function stack.arrange(p)
    return arrange(p, "right")
end
-- ########################################################################
-- ########################################################################
-- ########################################################################
stack.left = {}
stack.left.name = "stackLeft"
function stack.left.arrange(p)
    return arrange(p, "left")
end
-- ########################################################################
-- ########################################################################
-- ########################################################################
return stack


```