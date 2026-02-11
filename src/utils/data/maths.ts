import type { Question } from "../types";

export const mathsQuestions: Question[] = [
  {
    questionNumber: 101,
    marks: 1,
    content: `In a triangle ABC, $BC=7$, $AC=8$, $AB=\alpha \in N$ and $\cos A = \frac{2}{3}$. If $49 \cos(3C) + 42 = \frac{m}{n}$ where $gcd(m,n)=1$, then $m+n$ is equal to:

(a) 38 \\
(b) 39 \\
(c) 37 \\
(d) 36`,
  },
  {
    questionNumber: 102,
    marks: 1,
    content: `Let the equation $x(x+2)(12-k)=2$ have equal roots. Then the distance of the point $(k, \frac{k}{2})$ from the line $3x+4y+5=0$ is:

(a) 15 \\
(b) $5\sqrt{3}$ \\
(c) $15\sqrt{5}$ \\
(d) 12`,
  },
  {
    questionNumber: 103,
    marks: 1,
    content: `A circle C of radius 2 lies in the second quadrant and touches both the coordinate axes. Let r be the radius of a circle that has centre at the point (2, 5) and intersects the circle C at exactly two points. If the set of all possible values of r is the interval $(\alpha, \beta)$, then $3\beta-2\alpha$ is equal to:

(a) 15 \\
(b) 225 \\
(c) 14 \\
(d) 196`,
  },
  {
    questionNumber: 104,
    marks: 1,
    content: `Let the mean and the standard deviation of the observation 2, 3, 3, 4, 5, 7, a, b be 4 and $\sqrt{2}$ respectively. Then the mean deviation about the mode of these observations is:

(a) 1 \\
(b) $\frac{1}{2}$ \\
(c) 2 \\
(d) $\frac{3}{4}$`,
  },
  {
    questionNumber: 105,
    marks: 1,
    content: `The probability of forming a 12 persons committee from 4 engineers, 2 doctors and 10 professors containing at least 3 engineers and at least 1 doctor, is:

(a) $\frac{129}{182}$ \\
(b) $\frac{103}{182}$ \\
(c) $\frac{17}{26}$ \\
(d) $\frac{19}{26}$`,
  },
  {
    questionNumber: 106,
    marks: 1,
    content: `In how many ways can a bowler take four wickets in a single 6-ball over?

(a) 6 \\
(b) 15 \\
(c) 20 \\
(d) 30`,
  },
  {
    questionNumber: 107,
    marks: 1,
    content: `Evaluate $\lim_{x\to0} \frac{x}{\sqrt{1+x}-\sqrt{1-x}}$:

(a) 1 \\
(b) 2 \\
(c) -1 \\
(d) -2`,
  },
  {
    questionNumber: 108,
    marks: 1,
    content: `The domain of the function $f(x)=\frac{1}{\sqrt{9-x^2}}$ is:

(a) $-3 \le x \le 3$ \\
(b) $-3 < x < 3$ \\
(c) $-9 \le x \le 9$ \\
(d) $-9 < x < 9$`,
  },
  {
    questionNumber: 109,
    marks: 1,
    content: `The amplitude of $\sin\frac{\pi}{5} + i(1-\cos\frac{\pi}{5})$ is:

(a) $\frac{\pi}{5}$ \\
(b) $\frac{\pi}{10}$ \\
(c) $\frac{2\pi}{5}$ \\
(d) $\frac{\pi}{15}$`,
  },
  {
    questionNumber: 110,
    marks: 1,
    content: `Let $f(x) = \frac{\sqrt{4+x}-2}{x}$, $x \neq 0$. If $f(x)$ is continuous at $x=0$, then $f(0) =$:

(a) $\frac{1}{2}$ \\
(b) $\frac{1}{4}$ \\
(c) 2 \\
(d) $\frac{3}{2}$`,
  },
  {
    questionNumber: 111,
    marks: 1,
    content: `If $A = \begin{bmatrix} \cos^2\theta & \sin\theta\cos\theta \\ \cos\theta\sin\theta & \sin^2\theta \end{bmatrix}$ and $B = \begin{bmatrix} \cos^2\phi & \sin\phi\cos\phi \\ \cos\phi\sin\phi & \sin^2\phi \end{bmatrix}$, then $AB=O$ if:

(a) $\theta = n\phi, n=0,1,2...$ \\
(b) $\theta + \phi = n\pi, n=0,1,2...$ \\
(c) $\theta - \phi = (2n+1)\frac{\pi}{2}, n=0,1,2...$ \\
(d) $\theta = \phi + \frac{n\pi}{2}, n=0,1,2...$`,
  },
  {
    questionNumber: 112,
    marks: 1,
    content: `If A is a square matrix of order 3, then $|Adj. A| =$:

(a) $|A|^{-1}$ \\
(b) $|A|$ \\
(c) $|A|^3$ \\
(d) $|A|^2$`,
  },
  {
    questionNumber: 113,
    marks: 1,
    content: `For $A = \begin{bmatrix} 3 & 1 \\ -1 & 2 \end{bmatrix}$, then $14A^{-1}$ is given by:

(a) $14 \begin{bmatrix} 2 & -1 \\ 1 & 3 \end{bmatrix}$ \\
(b) $\begin{bmatrix} 4 & -2 \\ 2 & 6 \end{bmatrix}$ \\
(c) $2 \begin{bmatrix} 2 & -1 \\ 1 & -3 \end{bmatrix}$ \\
(d) $2 \begin{bmatrix} -3 & -1 \\ 1 & -2 \end{bmatrix}$`,
  },
  {
    questionNumber: 114,
    marks: 1,
    content: `$\int \frac{\sin^2x - \cos^2x}{\sin^2x \cos^2x} dx =$:

(a) $\tan x + \cot x + c$ \\
(b) $\text{cosec } x + \sec x + c$ \\
(c) $\tan x + \sec x + c$ \\
(d) $\tan x + \text{cosec } x + c$`,
  },
  {
    questionNumber: 115,
    marks: 1,
    content: `If $\\alpha$ and $\\beta$ are the roots of the equation $x^2 + px + q = 0$, then the value of $(\\alpha^2 + \\beta^2)$ is:

(a) $p^2 - 2q$ \\
(b) $p^2 + 2q$ \\
(c) $q^2 - 2p$ \\
(d) $q^2 + 2p$`,
  },
  {
    questionNumber: 116,
    marks: 1,
    content: `The value of $\\int_0^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} dx$ is:

(a) $\\pi$ \\
(b) $\\pi/2$ \\
(c) $\\pi/4$ \\
(d) 0`,
  },
  {
    questionNumber: 117,
    marks: 1,
    content: `The slope of the tangent to the curve $y = x^3 - x$ at $x = 2$ is:

(a) 11 \\
(b) 12 \\
(c) 13 \\
(d) 10`,
  },
  {
    questionNumber: 118,
    marks: 1,
    content: `If $\\vec{a} = \\hat{i} + \\hat{j} + \\hat{k}$ and $\\vec{b} = \\hat{i} - \\hat{j} + \\hat{k}$, then $\\vec{a} \\cdot \\vec{b}$ is:

(a) 1 \\
(b) 2 \\
(c) 3 \\
(d) 0`,
  },
  {
    questionNumber: 119,
    marks: 1,
    content: `The eccentricity of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ is:

(a) 3/5 \\
(b) 4/5 \\
(c) 9/25 \\
(d) 1/5`,
  },
  {
    questionNumber: 120,
    marks: 1,
    content: `The general solution of the differential equation $\\frac{dy}{dx} = e^{x-y}$ is:

(a) $e^y = e^x + c$ \\
(b) $e^x = e^y + c$ \\
(c) $e^{x+y} = c$ \\
(d) $y = x + c$`,
  },
  {
    questionNumber: 121,
    marks: 1,
    content: `The value of $\\tan^{-1}(1) + \\cos^{-1}(-1/2) + \\sin^{-1}(-1/2)$ is:

(a) $\\pi/4$ \\
(b) $3\\pi/4$ \\
(c) $2\\pi/3$ \\
(d) $\\pi$`,
  },
  {
    questionNumber: 122,
    marks: 1,
    content: `The area of the region bounded by the curve $y = x^2$ and the line $y = 4$ is:

(a) 32/3 \\
(b) 16/3 \\
(c) 8/3 \\
(d) 4`,
  },
  {
    questionNumber: 123,
    marks: 1,
    content: `The distance of the point (1, 2, 3) from the origin is:

(a) $\\sqrt{14}$ \\
(b) 6 \\
(c) $\\sqrt{6}$ \\
(d) 14`,
  },
  {
    questionNumber: 124,
    marks: 1,
    content: `If $P(A) = 0.4$, $P(B) = 0.8$ and $P(B|A) = 0.6$, then $P(A \\cup B)$ is:

(a) 0.96 \\
(b) 0.24 \\
(c) 0.56 \\
(d) 0.84`,
  },
  {
    questionNumber: 125,
    marks: 1,
    content: `The derivative of $\\log(\\sin x)$ with respect to $x$ is:

(a) $\\cot x$ \\
(b) $\\tan x$ \\
(c) $\\frac{1}{\\sin x}$ \\
(d) $-\\cot x$`,
  },
  {
    questionNumber: 126,
    marks: 1,
    content: `The value of $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{vmatrix}$ is:

(a) 24 \\
(b) 0 \\
(c) 10 \\
(d) 15`,
  },
  {
    questionNumber: 127,
    marks: 1,
    content: `The sum of the first 20 terms of the AP 2, 4, 6, ... is:

(a) 420 \\
(b) 400 \\
(c) 380 \\
(d) 440`,
  },
  {
    questionNumber: 128,
    marks: 1,
    content: `The angle between the lines $y = x$ and $y = \\sqrt{3}x$ is:

(a) $15^\\circ$ \\
(b) $30^\\circ$ \\
(c) $45^\\circ$ \\
(d) $60^\\circ$`,
  },
  {
    questionNumber: 129,
    marks: 1,
    content: `The coordinates of the focus of the parabola $y^2 = 12x$ are:

(a) (3, 0) \\
(b) (0, 3) \\
(c) (-3, 0) \\
(d) (0, -3)`,
  },
  {
    questionNumber: 130,
    marks: 1,
    content: `If $f(x) = x^2 + 2x + 1$, then $f'(1)$ is:

(a) 4 \\
(b) 3 \\
(c) 2 \\
(d) 1`,
  },
  {
    questionNumber: 131,
    marks: 1,
    content: `The value of $\\sin(2\\sin^{-1} 0.6)$ is:

(a) 0.96 \\
(b) 0.48 \\
(c) 1.2 \\
(d) 0.36`,
  },
  {
    questionNumber: 132,
    marks: 1,
    content: `The radius of the circle $x^2 + y^2 - 4x - 6y - 12 = 0$ is:

(a) 5 \\
(b) 25 \\
(c) $\\sqrt{13}$ \\
(d) 7`,
  },
  {
    questionNumber: 133,
    marks: 1,
    content: `The value of $\\lim_{x \\to 0} \\frac{\\sin 5x}{x}$ is:

(a) 5 \\
(b) 1 \\
(c) 0 \\
(d) 1/5`,
  },
  {
    questionNumber: 134,
    marks: 1,
    content: `If $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, then $A \\cap B$ is:

(a) $\\{3\\}$ \\
(b) $\\{1, 2, 3, 4, 5\\}$ \\
(c) $\\{1, 2\\}$ \\
(d) $\\phi$`,
  },
  {
    questionNumber: 135,
    marks: 1,
    content: `The order of the differential equation $\\frac{d^2y}{dx^2} + (\\frac{dy}{dx})^3 + y = 0$ is:

(a) 2 \\
(b) 3 \\
(c) 1 \\
(d) 0`,
  },
  {
    questionNumber: 136,
    marks: 1,
    content: `The projection of vector $\\vec{a} = 2\\hat{i} + 3\\hat{j}$ on $\\hat{i}$ is:

(a) 2 \\
(b) 3 \\
(c) $\\sqrt{13}$ \\
(d) 0`,
  },
  {
    questionNumber: 137,
    marks: 1,
    content: `The value of $i^{25}$ is:

(a) $i$ \\
(b) $-i$ \\
(c) 1 \\
(d) -1`,
  },
  {
    questionNumber: 138,
    marks: 1,
    content: `The direction cosines of the z-axis are:

(a) (0, 0, 1) \\
(b) (1, 0, 0) \\
(c) (0, 1, 0) \\
(d) (1, 1, 1)`,
  },
  {
    questionNumber: 139,
    marks: 1,
    content: `The number of subsets of a set containing 3 elements is:

(a) 8 \\
(b) 3 \\
(c) 6 \\
(d) 9`,
  },
  {
    questionNumber: 140,
    marks: 1,
    content: `The midpoint of the line segment joining (2, 4) and (6, 8) is:

(a) (4, 6) \\
(b) (8, 12) \\
(c) (2, 2) \\
(d) (4, 4)`,
  },
  {
    questionNumber: 141,
    marks: 1,
    content: `The value of $\\log_2 32$ is:

(a) 5 \\
(b) 4 \\
(c) 16 \\
(d) 2`,
  },
  {
    questionNumber: 142,
    marks: 1,
    content: `If $y = e^{2x}$, then $\\frac{dy}{dx}$ is:

(a) $2e^{2x}$ \\
(b) $e^{2x}$ \\
(c) $\\frac{1}{2}e^{2x}$ \\
(d) $2x e^{2x-1}$`,
  },
  {
    questionNumber: 143,
    marks: 1,
    content: `The value of $\\cos 120^\\circ$ is:

(a) -1/2 \\
(b) 1/2 \\
(c) $-\\sqrt{3}/2$ \\
(d) $\\sqrt{3}/2$`,
  },
  {
    questionNumber: 144,
    marks: 1,
    content: `The identity matrix of order 2 is:

(a) $\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ \\
(b) $\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ \\
(c) $\\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$ \\
(d) $\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$`,
  },
  {
    questionNumber: 145,
    marks: 1,
    content: `The distance between points (1, 2) and (4, 6) is:

(a) 5 \\
(b) 7 \\
(c) 25 \\
(d) $\\sqrt{7}$`,
  },
  {
    questionNumber: 146,
    marks: 1,
    content: `The value of $5!$ is:

(a) 120 \\
(b) 60 \\
(c) 24 \\
(d) 720`,
  },
  {
    questionNumber: 147,
    marks: 1,
    content: `If $\\sin \\theta = 1/2$, then the principal value of $\\theta$ is:

(a) $\\pi/6$ \\
(b) $\\pi/3$ \\
(c) $\\pi/4$ \\
(d) $\\pi/2$`,
  },
  {
    questionNumber: 148,
    marks: 1,
    content: `The slope of a horizontal line is:

(a) 0 \\
(b) 1 \\
(c) Undefined \\
(d) -1`,
  },
  {
    questionNumber: 149,
    marks: 1,
    content: `The modulus of $3 + 4i$ is:

(a) 5 \\
(b) 7 \\
(c) 25 \\
(d) $\\sqrt{7}$`,
  },
  {
    questionNumber: 150,
    marks: 1,
    content: `The value of $\\int 1 dx$ is:

(a) $x + c$ \\
(b) $c$ \\
(c) $1 + c$ \\
(d) $x^2/2 + c$`,
  },
];
