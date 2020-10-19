Split(['#a', '#b'], {
    sizes: [40, 60],
    gutterSize: 8,
    cursor: 'col-resize',
    minSize: [100,200],
    snapOffset: 0
})

Split(['#c', '#d'], {
    direction: 'vertical',
    sizes: [25, 75],
    gutterSize: 8,
    cursor: 'row-resize',
    minSize: [1,100],
    snapOffset: 0
})

