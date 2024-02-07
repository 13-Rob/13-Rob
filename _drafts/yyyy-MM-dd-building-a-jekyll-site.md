---
# Front matter
title: Building a Jekyll site
layout: post
language: en
---

I decided to build my own Jekyll site, to host my own site on GitHub pages. My decision
was based on two things: wanting to host the site on GitHub pages, and not wanting to use
a more complex framework for such a simple task. Through the process I discovered some
things that I wish I had seen on the very first Jekyll tutorial. That's what motivate me
to write a simple guide on how to build and deploy your own Jekyll site.

## What is Jekyll?

Jekyll is a static site generator. You can easily use templates created by someone else to
make your own website, without having to tweak the design, only adding your information.
It is so popular because it allows the user to create a blog without the need of a
database to store the posts, instead you use text files. It is also very customizable if
you have some understanding of web development, but it is not a requisite.

---

## Building a Blog

If you go to <a href="https://jekyllrb.com/">Jekyll's</a> official documentation you will
find a lot of useful tutorials and information, but none of those tutorials explain more
than just the basics.

### Prerequisites

Jekyll is a Ruby gem, if you don't understand this terms don't worry, just know that you
will be working with *gems* and a `Gemfile`. To work with *gems* you need to have Ruby,
and RubyGems installed on your computer.

### Jekyll Installation

Here is assumed that you already completed the **prerequisites**, if you are stuck
installing Ruby and RubyGems, you can follow this <a href="#">guide</a>.

1\. Install the jekyll and bundler gems.

```
gem install jekyll bundler
```

2\. Initialize a new `Gemfile` for your project:

```
bundle init
```
