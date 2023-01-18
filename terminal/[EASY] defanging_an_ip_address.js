/*
Link do desafio: https://leetcode.com/problems/defanging-an-ip-address/
ATENÇÃO: Este desafio só funciona se para o node 15+
*/

function defangIP (address) {
  address = address.replaceAll('.', '[.]')
  return address
};

ip_example = '1.1.1.1'
console.log(defangIP(ip_example))