#include <stdio.h>

int main(){
  int X,Y,Z;
  scanf("%d %d %d",&X,&Y,&Z);
  int T;
  T=X;
  X=Y;
  Y=T;
  T=Z;
  Z=X;
  X=T;
  printf("%d %d %d\n",X,Y,Z);
  return 0;
}