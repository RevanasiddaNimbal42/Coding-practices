#include<iostream>
using namespace std;

class student{
    int id;
    float price;
    public:
    void setdata(int id ,float  price){
        this->id = id;        //this-> helps to assingn the values and return the values (return *this);
        this->price=price;

    }
    void getdata(){
        cout<<"The Id of the Item is "<<id<<" and its price is"<<price<<"\n";
    }
};
int main(){
    int a;      
    float b;     
                    //student *ptr=new student(23,234.34) ; -->this is for single values . 
                    // the below code is for arrays.                  
    student *ptr=new student[2];  //new function is like & which helps to 
    student *pptr = ptr;             // store data in pointer
    
     for(int i=0;i<2;i++){
        cout<<"Enter the values of id & price ";
        cin>>a>>b;
        ptr->setdata(a,b);
        ptr++;                  //ptr will stores all values this not come back 
                                //so we need to store ptr in other pointer say pptr;
    }
    for(int i=0;i<2;i++){
        pptr->getdata();
        pptr++;
    }  
      delete[] ptr;    //which deletes the all deta stored in ptr pointer 
      // or frees the  memory;

    return 0;
}