/*
Link do desafio: https://leetcode.com/problems/defanging-an-ip-address/
ATENÇÃO: Este desafio só funciona se para o node 15+
*/

/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
  address = address.replaceAll('.', '[.]')
  return address
};