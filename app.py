from flask import Flask, render_template

app = Flask(__name__)


@app.route('/stronci/')
def stronci():  # put application's code here
    return render_template('stronci.html')


@app.route('/indi/')
def indi():  # put application's code here
    return render_template('indi.html')


if __name__ == '__main__':
    app.run()
