
class Functions{

    static validatePattern(text,pattern){
        return pattern.test(text);
    }

    static validateMaxAndMinLength(text,min,max){
        if(text.length<min){
            return 1;
        }
        else if(text.length>max){
            return 2;
        }
        return 0;
    }

}

export default Functions;