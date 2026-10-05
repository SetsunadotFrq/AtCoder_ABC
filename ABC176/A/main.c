#include <stdio.h>
#include <string.h>

int main(){
  
  char N[200001];
  scanf("%s",N);
  
  int S=0;
  
  int k=0;
  
  int L=strlen(N);
  
  while(k<L){
    S=S+N[k]-'0';
    k++;
  }
  
  if(S%9==0)printf("Yes\n");
  else("No\n");
  
  return 0;
}