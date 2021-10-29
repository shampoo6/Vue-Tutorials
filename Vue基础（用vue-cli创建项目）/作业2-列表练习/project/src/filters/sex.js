export default (value) => {
    return value === 'male' ?
        '男' :
        value === 'female' ?
            '女' : '其他'
}
