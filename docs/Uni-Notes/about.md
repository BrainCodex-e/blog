# MOSFET Modes

!!! note
    This page summarizes NMOS and PMOS transistor modes, including region conditions, equations, and application notes.

## 📊 Region Summary Table

| Region     | NMOS Conditions                          | NMOS \( I_D \) Equation                                                                 | PMOS Conditions                                 | PMOS \( I_D \) Equation                                                              |
|------------|-------------------------------------------|------------------------------------------------------------------------------------------|--------------------------------------------------|----------------------------------------------------------------------------------------|
| Cutoff     | \( V_{GS} < V_T \)                       | \( I_D = 0 \)                                                                            | \( V_{SG} < |V_T| \)                             | \( I_D = 0 \)                                                                          |
| Linear     | \( V_{GS} > V_T,\ V_{DS} < V_{GS} - V_T \) | \( I_D = \beta_n [(V_{GS} - V_T)V_{DS} - \frac{1}{2}V_{DS}^2] \)                      | \( V_{SG} > |V_T|,\ V_{SD} < V_{SG} - |V_T| \)   | \( I_D = \beta_p [(V_{SG} - |V_T|)V_{SD} - \frac{1}{2}V_{SD}^2] \)                    |
| Saturation | \( V_{GS} > V_T,\ V_{DS} \geq V_{GS} - V_T \) | \( I_D = \frac{1}{2} \beta_n (V_{GS} - V_T)^2 \)                                    | \( V_{SG} > |V_T|,\ V_{SD} \geq V_{SG} - |V_T| \) | \( I_D = \frac{1}{2} \beta_p (V_{SG} - |V_T|)^2 \)                                    |

## 🔄 Region Conditions

=== "NMOS"
- **Cutoff**: \( V_{GS} < V_T \)
- **Linear**: \( V_{GS} > V_T \) and \( V_{DS} < V_{GS} - V_T \)
- **Saturation**: \( V_{GS} > V_T \) and \( V_{DS} \geq V_{GS} - V_T \)

=== "PMOS"
- **Cutoff**: \( V_{SG} < |V_T| \)
- **Linear**: \( V_{SG} > |V_T| \) and \( V_{SD} < V_{SG} - |V_T| \)
- **Saturation**: \( V_{SG} > |V_T| \) and \( V_{SD} \geq V_{SG} - |V_T| \)

## 📐 Equations

=== "NMOS"
```math
I_D = \begin{cases}
0 & V_{GS} < V_T \\
\beta_n \left[(V_{GS} - V_T)V_{DS} - \frac{1}{2}V_{DS}^2\right] & V_{DS} < V_{GS} - V_T \\
\frac{1}{2} \beta_n (V_{GS} - V_T)^2 & V_{DS} \geq V_{GS} - V_T
\end{cases}
```
=== "PMOS"
```math
I_D = \begin{cases}
0 & V_{SG} < |V_T| \\
\beta_p \left[(V_{SG} - |V_T|)V_{SD} - \frac{1}{2}V_{SD}^2\right] & V_{SD} < V_{SG} - |V_T| \\
\frac{1}{2} \beta_p (V_{SG} - |V_T|)^2 & V_{SD} \geq V_{SG} - |V_T|
\end{cases}
```
