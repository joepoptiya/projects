FMT Cheat Sheet

General

- %v (value in default format)
- %T (type)
- %% (literal %)

Boolean

- %t (true or false)

Integer

- %b (base 2)
- %o (base 8)
- %d (base 10)
- %x (base 16)

Floating Points

- %e (scientific notation)
- %f / %F (decimal no exponent)
- %g (for large exponents)

Strings

- %s (default)
- %q (double quoted string)

Width & Percision

- %f (default width, default percision)
- %9f (width 9, default percision)
- %.2f (default width, percision 2)
- %9.2f (width 9, percision 2)
- %9.f (width 9, percision 0)

Padding

- %09d (pads digit to length 9 with preceeding 0's)
- %-4d (Pads with spaces (width 4, left justified))

Methods

- Sprintf() format without printing
- Printf() format with printing
