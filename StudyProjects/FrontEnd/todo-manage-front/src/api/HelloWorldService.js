import axios from 'axios';

class HelloWorldService {
  executeHelloWorldService1() {
    console.log('executed service');
    return axios.get('http://localhost:8080/hello-world');
  }
  executeHelloWorldService2() {
    console.log('executed service');
    return axios.get('http://localhost:8080/hello-world-bean');
  }
  executeHelloWorldService3(name) {
    console.log('executed service');
    return axios.get(
      `http://localhost:8080/hello-world/path-variable/${name}`
    );
  }
}

export default new HelloWorldService();
