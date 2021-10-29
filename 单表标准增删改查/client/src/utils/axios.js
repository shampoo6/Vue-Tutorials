import axios from 'axios'

// 创建一个axios的实例对象
// baseURL 是访问服务器时的基础路径
// 此处 baseURL 未写端口号 那么axios将采用80端口进行访问
const _axios = axios.create({baseURL: 'http://127.0.0.1'})
export default _axios
