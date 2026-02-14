import type { Question } from "../types";

export const mathsQuestions: Question[] = [
  {
    questionNumber: 101,
    marks: 2,
    content: `If $\\tan^{-1} 2x + \\tan^{-1} 3x = \\frac{\\pi}{4}$, then value of $x$ is:

(A) $\\frac{5}{6}$ \\
(B) $-\\frac{1}{6}$ \\
(C) $1$ \\
(D) $\\frac{1}{6}$`,
  },

  {
    questionNumber: 102,
    marks: 2,
    content: `If the points $A(5, k)$, $B(-3, 1)$ and $C(-7, -2)$ are collinear, then $k =$

(A) $\\frac{1}{7}$ \\
(B) $7$ \\
(C) $-7$ \\
(D) $\\frac{-1}{7}$`,
  },

  {
    questionNumber: 103,
    marks: 2,
    content: `The equation of circle with centre at $(2, -3)$ and the circumference $10\\pi$ units is:

(A) $x^{2} + y^{2} - 4x + 6y - 12 = 0$ \\
(B) $x^{2} + y^{2} - 4x - 6y - 12 = 0$ \\
(C) $x^{2} + y^{2} + 4x + 6y + 12 = 0$ \\
(D) $x^{2} + y^{2} - 4x + 6y + 12 = 0$`,
  },

  {
    questionNumber: 104,
    marks: 2,
    content: `For given data $N = 60$, $\\sum x^{2} = 18000$ and $\\sum x = 960$, then variance of data is:

(A) $44$ \\
(B) $54$ \\
(C) $34$ \\
(D) $22$`,
  },

  {
    questionNumber: 105,
    marks: 2,
    content: String.raw`
The value of $\lim_{x \to 0} \frac{\log(1 + 3x)}{\sin 2x}$ is:

(a) 3/2  
(b) 2/3  
(c) 1  
(d) 0
`,
  },

  {
    questionNumber: 106,
    marks: 2,
    content: String.raw`
If $\vec{a} = \hat{i} + 2\hat{j} + 3\hat{k}$ and $\vec{b} = 2\hat{i} - \hat{j} + \hat{k}$, then the projection of $\vec{a}$ on $\vec{b}$ is:

(a) $\frac{3}{\sqrt{6}}$  
(b) $\frac{1}{\sqrt{6}}$  
(c) $\frac{5}{\sqrt{6}}$  
(d) $\frac{2}{\sqrt{6}}$
`,
  },

  {
    questionNumber: 107,
    marks: 2,
    content: String.raw`
The general solution of $\tan 3x = \cot x$ is:

(a) $(2n+1)\frac{\pi}{8}$  
(b) $n\pi + \frac{\pi}{4}$  
(c) $(2n+1)\frac{\pi}{4}$  
(d) $n\pi + \frac{\pi}{8}$
`,
  },

  {
    questionNumber: 108,
    marks: 2,
    content: String.raw`
The domain of the function $f(x)=\frac{1}{\sqrt{9-x^{2}}}$ is:

(a) $[-3, 3]$  
(b) $(-3, 3)$  
(c) $[-9, 9]$  
(d) $(-9, 9)$
`,
  },

  {
    questionNumber: 109,
    marks: 2,
    content: String.raw`If $2\cos\theta = x + \frac{1}{x}$, then $2\cos 3\theta =$

(A) $x^3 - \frac{1}{x^3} \qquad \qquad$ (B) $(x + \frac{1}{x})^3 \\ \\$
(C) $x + \frac{1}{x} \qquad \qquad$ (D) $x^3 + \frac{1}{x^3}$`,
  },

  {
    questionNumber: 110,
    marks: 2,
    content: String.raw`
If $f(x)=\frac{\sqrt{4+x}-2}{x}, x\ne0$ is continuous at $x=0$, then $f(0)=$

(a) 1/2  
(b) 1/4  
(c) 2  
(d) 4
`,
  },
  {
    questionNumber: 111,
    marks: 2,
    content: `If the elements of matrix $A$ are the reciprocals of elements of matrix $\\begin{bmatrix} 1 & \\omega & \\omega^{2} \\\\ \\omega & \\omega^{2} & 1 \\\\ \\omega^{2} & 1 & \\omega \\end{bmatrix}$, where $\\omega$ is complex cube root of unity, then:

(A) $A^{-1} = A^{2}$ \\
(B) $A^{-1} = A$ \\
(C) $A^{-1} = I$ \\
(D) $A^{-1}$ does not exist`,
  },

  {
    questionNumber: 112,
    marks: 2,
    content: String.raw`
The shortest distance between the lines 
$\frac{x-1}{2} = \frac{y-2}{3} = \frac{z-3}{4}$ and 
$\frac{x-2}{3} = \frac{y-4}{4} = \frac{z-5}{5}$ is:

(a) $\frac{1}{\sqrt{6}}$  
(b) $\frac{1}{6}$  
(c) $\frac{1}{\sqrt{3}}$  
(d) 0
`,
  },

  {
    questionNumber: 113,
    marks: 2,
    content: String.raw`
If $A = \begin{bmatrix}1 & 2 \\ 3 & 4\end{bmatrix}$, then $A^{-1}$ is:

(a) $\begin{bmatrix}-2 & 1 \\ 1.5 & -0.5\end{bmatrix}$  
(b) $\frac{-1}{2}\begin{bmatrix}4 & -2 \\ -3 & 1\end{bmatrix}$  
(c) $\begin{bmatrix}4 & -2 \\ -3 & 1\end{bmatrix}$  
(d) Does not exist
`,
  },

  {
    questionNumber: 114,
    marks: 2,
    content: String.raw`
A circle $C$ of radius 2 lies in the second quadrant and touches both the coordinate axes. 
The equation of the circle is:

(a) $(x-2)^2 + (y-2)^2 = 4$  
(b) $(x+2)^2 + (y-2)^2 = 4$  
(c) $(x+2)^2 + (y+2)^2 = 4$  
(d) $x^2 + y^2 + 4x - 4y + 4 = 0$
`,
  },

  {
    questionNumber: 115,
    marks: 2,
    content: String.raw`
The value of $\int e^x (\sin x + \cos x)\, dx$ is:

(a) $e^x \sin x + C$  
(b) $e^x \cos x + C$  
(c) $e^x (\sin x - \cos x) + C$  
(d) $e^x \tan x + C$
`,
  },

  {
    questionNumber: 116,
    marks: 2,
    content: String.raw`
If $y = x^x$, then $\frac{dy}{dx}$ is:

(a) $x^x (1 + \log x)$  
(b) $x^x \log x$  
(c) $x \cdot x^{x-1}$  
(d) $1 + \log x$
`,
  },

  {
    questionNumber: 117,
    marks: 2,
    content: `$$\\int_{0}^{\\frac{\\pi}{2}} \\frac{\\sqrt[3]{\\sec x}}{\\sqrt[3]{\\sec x} + \\sqrt[3]{\\cosec x}} dx =$$

(A) $\\frac{\\pi}{2}$ \\
(B) $\\frac{\\pi}{4}$ \\
(C) $0$ \\
(D) $\\frac{-\\pi}{4}$`,
  },

  {
    questionNumber: 118,
    marks: 2,
    content: String.raw`
The value of $k$ for which the lines $3x - 4y + 7 = 0$ and $kx + 3y - 5 = 0$ are perpendicular is:

(a) 3  
(b) 4  
(c) -3  
(d) -4
`,
  },

  {
    questionNumber: 119,
    marks: 2,
    content: `The angle between the lines $\\frac{x-1}{4} = \\frac{y-3}{1} = \\frac{z}{8}$ and $\\frac{x-2}{2} = \\frac{y+1}{2} = \\frac{z-4}{1}$ is:

(A) $\\cos^{-1}\\left(\\frac{1}{3}\\right)$ \\
(B) $\\sin^{-1}\\left(\\frac{1}{3}\\right)$ \\
(C) $\\sin^{-1}\\left(\\frac{2}{3}\\right)$ \\
(D) $\\cos^{-1}\\left(\\frac{2}{3}\\right)$`,
  },

  {
    questionNumber: 120,
    marks: 2,
    content: String.raw`
The area of the triangle formed by the points $(0,0)$, $(3,0)$ and $(0,4)$ is:

(a) 12  
(b) 6  
(c) 7  
(d) 5
`,
  },
  {
    questionNumber: 121,
    marks: 2,
    content: String.raw`
The derivative of $\tan^{-1}\left(\frac{\cos x + \sin x}{\cos x - \sin x}\right)$ with respect to $x$ is:

(a) 0  
(b) 1  
(c) -1  
(d) 1/2
`,
  },

  {
    questionNumber: 122,
    marks: 2,
    content: String.raw`
The maximum value of $f(x) = \sin x + \cos x$ is:

(a) 1  
(b) 2  
(c) $\sqrt{2}$  
(d) $\frac{1}{\sqrt{2}}$
`,
  },

  {
    questionNumber: 123,
    marks: 2,
    content: String.raw`
The solution set of the inequality $x^2 - 5x + 6 < 0$ is:

(a) $(2,3)$  
(b) $[2,3]$  
(c) $(-\infty,2) \cup (3,\infty)$  
(d) $(2,\infty)$
`,
  },

  {
    questionNumber: 124,
    marks: 2,
    content: String.raw`
The value of $\int_0^1 \frac{1}{1+x^2} dx$ is:

(a) $\frac{\pi}{4}$  
(b) $\frac{\pi}{2}$  
(c) $\pi$  
(d) 1
`,
  },

  {
    questionNumber: 125,
    marks: 2,
    content: String.raw`
If vector $\vec{a}$ is perpendicular to $\vec{b}$, then $\vec{a} \cdot \vec{b} =$  

(a) 1  
(b) 0  
(c) -1  
(d) $|\vec{a}|\,|\vec{b}|$
`,
  },

  {
    questionNumber: 126,
    marks: 2,
    content: String.raw`
The general solution of the differential equation $\frac{dy}{dx} = \frac{y}{x}$ is:

(a) $y = cx$  
(b) $x = cy$  
(c) $xy = c$  
(d) $y = cx^2$
`,
  },

  {
    questionNumber: 127,
    marks: 2,
    content: String.raw`
The contrapositive of the statement "If it rains, then I will stay at home" is:

(a) If I do not stay at home, then it did not rain  
(b) If I stay at home, then it rains  
(c) If it does not rain, I will not stay at home  
(d) It rains and I do not stay at home
`,
  },

  {
    questionNumber: 128,
    marks: 2,
    content: String.raw`
The value of $\sin^2 25^\circ + \sin^2 65^\circ$ is:

(a) 0  
(b) 1  
(c) 2  
(d) 1/2
`,
  },

  {
    questionNumber: 129,
    marks: 2,
    content: String.raw`
The locus of a point which is equidistant from the points $(1,2)$ and $(3,4)$ is:

(a) $x + y = 5$  
(b) $x - y = 5$  
(c) $x + y = 0$  
(d) $2x + 2y = 7$
`,
  },

  {
    questionNumber: 130,
    marks: 2,
    content: String.raw`
The order and degree of the differential equation 
$\frac{d^2y}{dx^2} = \sqrt{1 + \left(\frac{dy}{dx}\right)^2}$ are:

(a) 2, 1  
(b) 2, 2  
(c) 1, 2  
(d) 2, undefined
`,
  },
  {
    questionNumber: 131,
    marks: 2,
    content: String.raw`
If $P(A) = 0.3$, $P(B) = 0.4$, and $A$ and $B$ are mutually exclusive, then $P(A \cup B)$ is:

(a) 0.12  
(b) 0.7  
(c) 0.1  
(d) 0.5
`,
  },

  {
    questionNumber: 132,
    marks: 2,
    content: String.raw`
The slope of the normal to the curve $y = 2x^2 + 3\sin x$ at $x = 0$ is:

(a) 3  
(b) -3  
(c) 1/3  
(d) -1/3
`,
  },

  {
    questionNumber: 133,
    marks: 2,
    content: String.raw`
The value of $\cos(\sin^{-1} x + \cos^{-1} x)$ for $|x| \le 1$ is:

(a) 1  
(b) 0  
(c) -1  
(d) x
`,
  },

  {
    questionNumber: 134,
    marks: 2,
    content: String.raw`
The equation of the plane passing through $(1,1,1)$ and parallel to the plane $2x + 3y + 4z = 5$ is:

(a) $2x + 3y + 4z = 9$  
(b) $2x + 3y + 4z = 0$  
(c) $x + y + z = 3$  
(d) $2x + 3y + 4z = 5$
`,
  },

  {
    questionNumber: 135,
    marks: 2,
    content: String.raw`
If $\begin{vmatrix} x & 2 \\ 18 & x \end{vmatrix} = 
\begin{vmatrix} 6 & 2 \\ 18 & 6 \end{vmatrix}$, then $x$ is equal to:

(a) 6  
(b) $\pm 6$  
(c) -6  
(d) 0
`,
  },

  {
    questionNumber: 136,
    marks: 2,
    content: String.raw`
The distance of the point $P(2,3,4)$ from the x-axis is:

(a) 5  
(b) $\sqrt{13}$  
(c) 2  
(d) $\sqrt{29}$
`,
  },

  {
    questionNumber: 137,
    marks: 2,
    content: String.raw`
The negation of the statement "All natural numbers are integers" is:

(a) Some natural numbers are not integers  
(b) No natural number is an integer  
(c) All integers are natural numbers  
(d) Some integers are not natural numbers
`,
  },

  {
    questionNumber: 138,
    marks: 2,
    content: String.raw`
The value of $\int_{-\pi/2}^{\pi/2} \sin^7 x\, dx$ is:

(a) 1  
(b) 0  
(c) 2  
(d) -1
`,
  },

  {
    questionNumber: 139,
    marks: 2,
    content: `If $f(x) = x$ for $x \\le 0$ \\
$= 0$ for $x > 0$ then $f(x)$ at $x = 0$ is:

(A) Continuous but not differentiable \\
(B) Not continuous but differentiable \\
(C) Continuous and differentiable \\
(D) Not continuous and not differentiable`,
  },

  {
    questionNumber: 140,
    marks: 2,
    content: String.raw`If $x^{p} y^{q} = (x + y)^{p+q}$, then $\frac{dy}{dx}$ is equal to:

(A) $\frac{y}{x} \qquad \qquad$ (B) $\frac{py}{qx} \\ $
(C) $\frac{x}{y} \qquad \qquad$ (D) $\frac{qy}{px}$`,
  },

  {
    questionNumber: 141,
    marks: 2,
    content: String.raw`
If $y = e^{\tan x}$, then $\frac{dy}{dx}$ at $x = 0$ is:

(a) 0  
(b) 1  
(c) e  
(d) 2
`,
  },

  {
    questionNumber: 142,
    marks: 2,
    content: String.raw`
The acute angle between the planes $2x - y + z = 6$ and $x + y + 2z = 3$ is:

(a) $\pi/3$  
(b) $\pi/4$  
(c) $\pi/6$  
(d) $\pi/2$
`,
  },

  {
    questionNumber: 143,
    marks: 2,
    content: String.raw`
The value of $\log_{10} 10 + \log_{10} 100 + \log_{10} 1000$ is:

(a) 3  
(b) 6  
(c) 1110  
(d) 10
`,
  },

  {
    questionNumber: 144,
    marks: 2,
    content: String.raw`
If $f: \mathbb{R} \to \mathbb{R}$ is defined by $f(x) = 3x - 4$, then $f^{-1}(x)$ is:

(a) $\frac{x+4}{3}$  
(b) $\frac{x-4}{3}$  
(c) $3x+4$  
(d) $\frac{1}{3x-4}$
`,
  },

  {
    questionNumber: 145,
    marks: 2,
    content: String.raw`
The feasible region for an LPP is shown in the figure. The objective function $Z = 4x + 3y$ will be maximum at:

(a) (0, 0)  
(b) Corner point with maximum coordinates  
(c) (0, 5)  
(d) (5, 0)
`,
  },

  {
    questionNumber: 146,
    marks: 2,
    content: String.raw`
If $\vec{a}$ and $\vec{b}$ are unit vectors such that $|\vec{a} + \vec{b}| = 1$, then $|\vec{a} - \vec{b}|$ is:

(a) 1  
(b) $\sqrt{3}$  
(c) $\sqrt{2}$  
(d) 2
`,
  },

  {
    questionNumber: 147,
    marks: 2,
    content: String.raw`
The value of $\frac{d}{dx}(e^{3\log x})$ is:

(a) $3x^2$  
(b) $x^3$  
(c) $3e^{3\log x}$  
(d) $3x$
`,
  },

  {
    questionNumber: 148,
    marks: 2,
    content: String.raw`
The equation of the circle concentric with $x^2 + y^2 - 6x + 4y - 12 = 0$ and passing through $(-2,2)$ is:

(a) $x^2 + y^2 - 6x + 4y - 20 = 0$  
(b) $x^2 + y^2 - 6x + 4y + 12 = 0$  
(c) $x^2 + y^2 - 6x + 4y - 32 = 0$  
(d) $x^2 + y^2 + 6x - 4y - 12 = 0$
`,
  },

  {
    questionNumber: 149,
    marks: 2,
    content: `The measure of the acute angle between the lines given by the equation $3x^{2} - 4\\sqrt{3}xy + 3y^{2} = 0$ is:

(A) $30^{\\circ}$ \\
(B) $45^{\\circ}$ \\
(C) $60^{\\circ}$ \\
(D) $70^{\\circ}$`,
  },

  {
    questionNumber: 150,
    marks: 2,
    content: String.raw`A line makes angles $\alpha$, $\beta$, $\gamma$ with the co-ordinate axes, then $\cos 2\alpha + \cos 2\beta + \cos 2\gamma$ is equal to:

(A) $-2$ \
(B) $-1$ \
(C) $2$ \
(D) $1$`,
  },
];
