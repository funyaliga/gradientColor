# colorGroup #

返回颜色渐变数组

## API ## 

gradientColor(startColor, endColor, step)

#### startColor ####

开始颜色

#### endColor

结束颜色

### step

分割次数



```javascript
new gradientColor('#000', '#fff', 5)

// => ["#000000", "#333333", "#666666", "#999999", "#cccccc"]
```

