# peoplecounter2

This is a follow up project to my people counter demo built in 2015 based on Raspberry Pi and motion sensors.

This project has been completely rewritten from scratch and now uses NodeJS instead of Python.

## How it works

This project counts people within proximity of the device it's installed on by identifying them via their NIC MAC address and/or any other uniquly identifiable wireless information.

This project currently gathers the following information about surrounding access points and clients.

* BSSID
* ESSID
* Access point security type
* Access point signal strength
* Client MAC Address
* Client signal strength

### License
Usage is provided under the [MIT License](https://github.com/kclark-jenkins/peoplecounter2/blob/master/LICENSE.md). See LICENSE for the full details.