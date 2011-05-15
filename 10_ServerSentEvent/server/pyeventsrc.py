#!/usr/bin/python
import sys
import time
print "Content-Type: text/event-stream\n\n"

while True:
    print "Event: server-time"
    print "data: %s\n" % (time.ctime(),)
    sys.stdout.flush()
    time.sleep(3)
