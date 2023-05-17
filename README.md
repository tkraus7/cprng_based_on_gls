# CPRNG based on GLS

This project is a javascript implementation of 3 different algorithms for generating pseudorandom numbers from the time series obtained from the generalized Lorenz system. It also provides functionality to visualise these systems.

## Generalized Lorenz system

The following nonlinear system of ordinary differential equations in $R^3$ is called generalized Lorenz system (GLS):
```math
\dot{x} = \begin{bmatrix}
                A & 0 \\
                0 & λ_3
                \end{bmatrix}x + x_1\begin{bmatrix}
                0 & 0 & 0 \\
                0 & 0 & -1 \\
                0 & 1 & 0
                \end{bmatrix}x.
``` 
where $x = [x_1\ x_2\ x_3]^T$, $λ_3 \in R$ and $A$ is a real matrix (2x2):
```math
A = \begin{bmatrix}
                a_{11} & a_{12} \\
                a_{21} & a_{22}
                \end{bmatrix},
``` 
with eigenvalues $λ_1,λ_2 \in R$, such that
```math
-λ_2>λ_1>-λ_3>0.
```

## Usage

Firstly you need to specify the parameters of the GLS ($a_{11}$, $a_{12}$, $a_{21}$, $a_{22}$ and $λ_3$). Based on those values the depicted equation will automatically update. The available presets are parameters for Lorenz and Chen systems. Once you have chosen your GLS parameters, it's time to specify the initial point $x_0$, $y_0$, $z_0$. This is the initial condition the system will start developing from. Lastly you need to set the **lenght**, **step** and **offset**. **Length** is the total number of steps of the ode solver, **step** is the size of a single ode step and **offset** is the number of skipped initial steps.  

Once you're done with setting the parameters, you can either choose to generate a random sequance or plot the inputed system. If you decide to generate, you need to select a combining algorithm for your sequence. The available ones are:
- **Sum**: the values of each GLS state will summed. The total sequence bit length will be $8*length$.
- **Xor**: the values of each GLS state will xored. The total sequence bit length will be $8*length$.
- **None**: the values of each GLS state will be used alone. The total sequence bit length will be $24*length$.  

The default selected one is **Sum**. All you need to do now is pressed the button **Generate**. You will be prompted with a dialog window, where you can specify the name of the resulting .txt file. Once you press **ok** the download should start automatically.  

If you want to plot the system then simply press the **Plot** button. You should see a 3D graph of your system.

## Installation

No additional programs are required. Simply download the files and open index.html in a browser of your choice.
