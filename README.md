* [Pair Programming Homework](#pair-programming-homework)
    * [Usage](#usage)
        * [Running the server(back end)](#running-the-serverback-end)
        * [Running the mini-program(front end)](#running-the-mini-programfront-end)

# Pair Programming Homework

## Usage

<details>
<summary>Clone this repository</summary>

```bash
git clone https://github.com/objout/pair_programming.git
```
</details>

### Running the server(back end)

Make sure you have the following dependencies installed:
- Python3
- pip3

Install Django and running the server:

<details>
<summary>Show Code</summary>

```bash 
cd pair_programming/dice_game_back_end
mkdir venv
python3 -m venv ./venv
source venv/bin/activate
pip3 install -r requirements.txt

python3 manage.py runserver 0.0.0.0:8000
```
</details>

### Running the mini-program(front end)

You have two choices:
- Install the IDE HBuilderX and WeChat Developer Tool. Then you
can compile the source code of uni-app to WeChat mini-program and
run the compiled result with WeChat Developer Tool.
- Just install the WeChat Developer Tool. Then open the project
under the directory `dice_game_front_end/unpackage/dist/dev` with
WeChat Developer Tool.

To test the online module of front end, you should find the line which contains
`ws://192.168.250.128:8000/ws/room/abc/` in the file
`dice_game_front_end/pages/game_online.vue` and modify the IP address
to yours. Recompile the source code after you modify it!
