#include<iostream>
#include<cmath>
#include<iomanip>
using namespace std;

class simplecal{
    float a,b;
    char c;
    public:
    float result=0.0;
    void set_values(void){
      cout<<"Enter A= ";
        cin>>a;
      cout<<"Enter Operation(+,-,*,/): ";
        cin>>c;
      cout<<"Enter B= ";
        cin>>b;
    }
    void process(){
        if(c=='+'){
            result=a+b;
            cout<<result<<"\n";
        }else if(c=='-'){
            result=a-b;
            cout<<result<<"\n";
        }else if(c=='*'){
            result=a*b;
            cout<<result<<"\n";
        }else if(c=='/'){
            result=a/b;
            cout<<fixed<<setprecision(2)<<result<<"\n";
        }else{
            cout<<"Syntax Error!"<<"\n";
        }
    }

};
class scientific{
      float a;
      float c;
      public:
       double d,b;
    
      float result=0.0;
      void setvalues(void){
            cout<<" Instructions are: \n"<<
           " Press 1 for sine function \n"<<
            "press 2 for cosine function \n"<<
            "press 3 for tangent function \n"<<
            "press 4 for expinential functions \n\n";
            cout<<"Enter number: ";
            cin>>a;\
           

      }
      void processing(){
        if(a==1){
            cout<<"sin(";
            cin>>b;
            double d = b;
            double r = d * M_PI / 180.0;
            result=sin(r);
            cout<<fixed<<setprecision(3)<<result<<"\n";
        }else if(a==2){
            cout<<"cos(";
            cin>>b;
            double d = b;
            double r= d * M_PI / 180.0;
            result=cos(r);
            cout<<fixed<<setprecision(3)<<result<<"\n";
        }else if(a==3){
            cout<<"tan(";
            cin>>b;
            double d = b;
            double r= d * M_PI / 180.0;
            result=tan(r);
            cout<<fixed<<setprecision(3)<<result<<"\n";
        }else if(a==4){
            cout<<"exp(";
            cin>>b;
            result=exp(b);
            cout<<fixed<<setprecision(3)<<result<<"\n";
        }else{
            cout<<"Syntax Error!";
        }
      }
      void inverse(void){
        cout<<" Instructions are: \n"<<
           " Press 1 for sine inverse  function \n"<<
            "press 2 for cosine inverse function \n"<<
            "press 3 for tangent inverse function \n\n";
            cout<<"Enter number: ";
            cin>>c;
        if(c==1){
            cout<<"asin(";
            cin>>b;
            result=asin(b)*(180.0/M_PI);
            cout<<fixed<<setprecision(0)<<result<<"\n";
        }else if(c==2){
            cout<<"acos(";
            cin>>b;
            result=acos(b)*(180.0/M_PI);
            cout<<fixed<<setprecision(0)<<result<<"\n";
        }else if(c==3){
            cout<<"atan(";
            cin>>b;
            result=atan(b)*(180.0/M_PI);
            cout<<fixed<<setprecision(0)<<result<<"\n";
        
        }else{
            cout<<"Syntax Error!";
        }
      }
};
class hybrid: public simplecal,public scientific{


};
int main(){
   hybrid s;
   
    s.setvalues();
    s.processing();
   
    cout<<" \n Simple calculations: \n";
    s.set_values();
     s.process();
      s.inverse();

    return 0;
}
