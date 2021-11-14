      var superObj = {superVal:'super'};
      var subObj = Object.create(superObj);
      subObj.subVal = 'sub';
      //debugger;
      console.log('subObj.subVal =>', subObj.subVal);
      console.log('subObj.superVal =>', subObj.superVal);
      subObj.superVal= 'sub';
      console.log('superObj.superVal =>', superObj.superVal);

// __proto__를 사용한 코드
      kim = {
        name :'kim',
        first:10, second:20,
        sum:function(){return this.first+this.second}
      }
      lee = {
        name:'lee',
        first:10, second:10,
        avg:function(){
          return (this.first+this.second)/2;
        }
      }
      lee.__proto__ = kim;
      console.log('kim.sum() : ', kim.sum());
      console.log('lee.sum() : ', lee.sum());
      console.log('lee.avg() : ', lee.avg());

// Object.create를 사용한 코드
      var kim = {
        name :'kim',
        first:10, second:20,
        sum:function(){return this.first+this.second}
      };
      var lee = Object.create(kim);
      lee.name = 'lee';
      lee.first = 30;
      lee.second = 60;
      lee.avg = function(){
        return (this.first+this.second)/2;
      }
      console.log('kim.sum() : ', kim.sum());
      console.log('lee.sum() : ', lee.sum());
      console.log('lee.avg() : ', lee.avg());
