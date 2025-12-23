#include<stdio.h>
// #include<math.h>
 int main(){
   float a,b,c,d,x,y;
   printf("Enter 3 numbers :");
   scanf("%f %f %f ",&a,&b,&c);
   d=b*b-4*a*c;
   if(d>0) {
    x=-b+sqrt(d)/2*a;
    y=-b-sqrt(d)/2*a;
    printf("Roots are real and district \n Roots are: %f and %f ",x,y);
   }else if(d==0){
    x=-b/2*a;
    y=x;
    printf("Roots are real and equal \n Roots are: %f and %f ",x,y);
   }else{
    printf("Roots are imaginary ");
   }
   return 0;
 }