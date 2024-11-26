var x, y, z;
x = parseInt(prompt("Input the First Integer"));
y = parseInt(prompt("Input the Second Integer"));
z = parseInt(prompt("Input the Third Integer"));

if ((x>y)&&(x>z))
    {
        document.write(x);
    }

else if ((y>z)&&(y>x))
    {
        document.write(y);
    }

else if ((z>x)&&(z>y))
    {
        document.write(z);
    }