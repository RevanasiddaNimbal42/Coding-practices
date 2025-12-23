#include<iostream>
#include<fstream>
using namespace std;
int main(){
    ifstream in;
    in.open("file1.txt");
        string st;
    getline(in,st);
    cout<<st;
  return 0;
}
    