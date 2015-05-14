var API = (function() {
    
  var obj = {public: {}, private: {}};
  
  obj.private.endpoint = 'http://localhost:3000/';
  
  obj.public.fetch = function(node) {
    node = obj.private.endpoint + node;
    console.log('connecting to ' + node + '...');
    return $.ajax({
      url: node,
      method: 'GET'
    });
  };
  
  return obj.public;
  
})();