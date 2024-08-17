/**
 * Date handler
 * @param {Date=} date Date to used
 * @param {object} param param
 * @param {string=} param.locale locale
 */
export default function Time(date: Date, { locale = 'fr-FR' } = {}) {
    if (!(date instanceof Date) || Number.isNaN(new Date(date).getTime()))
        throw new Error('Invalid date')

    return {
        /**
         * Get clean date to display
         * @param {object} data Params
         * @param {('long' | 'short' | 'narrow')=} data.weekday weekday
         * @param {('long' | 'short' | 'narrow')=} data.era era
         * @param {('numeric' | '2-digit')=} data.year year
         * @param {('numeric' | '2-digit' | 'long' | 'short' | 'narrow')=} data.month month
         * @param {('numeric' | '2-digit')=} data.day day
         * @param {('numeric' | '2-digit')=} data.hour hour
         * @param {('numeric' | '2-digit')=} data.minute minute
         * @param {('numeric' | '2-digit')=} data.second second
         * @param {('long' | 'short')=} data.timeZoneName timeZoneName
         * @returns {string} Clean date to display
         * {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleDateString Doc}
         */
        getCleanDate({
            weekday = undefined,
            era = undefined,
            year = 'numeric',
            month = 'long',
            day = '2-digit',
            hour = undefined,
            minute = undefined,
            second = undefined,
            timeZoneName = undefined,
        } = {}) {
            return date.toLocaleDateString(locale, {
                    weekday, era, year, month, day, hour, minute, second, timeZoneName,
                })
                .toLowerCase()
                .split(' ')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')
                .replace('À', 'à')
        },
        /**
         * Set new value on date
         * @param {number} value Value to set
         * @param {('ms' | 'sec' | 'min' | 'hour' | 'day' | 'month' | 'year')} type type
         * @returns {Date} Date updated
         */
        set(value, type) {
            switch (type) {
                case 'ms':
                    date.setMilliseconds(value)
                    break
                case 'sec':
                    date.setSeconds(value)
                    break
                case 'min':
                    date.setMinutes(value)
                    break
                case 'hour':
                    date.setHours(value)
                    break
                case 'day':
                    date.setDate(value)
                    break
                case 'month':
                    date.setMonth(value - 1)
                    break
                case 'year':
                    date.setFullYear(value)
                    break
                default:
                    break
            }
            return date
        },
        /**
         * Add element to date
         * @param {number} value Value to set
         * @param {('ms' | 'sec' | 'min' | 'hour' | 'day' | 'month' | 'year')} type type
         * @returns {Date} Date updated
         */
        add(value, type) {
            switch (type) {
                case 'ms':
                    return this.set((date.getMilliseconds()) + value, type)
                case 'sec':
                    return this.set((date.getSeconds()) + value, type)
                case 'min':
                    return this.set((date.getMinutes()) + value, type)
                case 'hour':
                    return this.set((date.getHours()) + value, type)
                case 'day':
                    return this.set((date.getDate()) + value, type)
                case 'month':
                    return this.set((date.getMonth()) + value + 1, type)
                case 'year':
                    return this.set((date.getFullYear()) + value, type)
                default:
                    return date
            }
        },
        /**
         * Remove element from date
         * @param {number} value Value to set
         * @param {('ms' | 'sec' | 'min' | 'hour' | 'day' | 'month' | 'year')} type type
         * @returns {Date} Date updated
         */
        remove(value, type) {
            switch (type) {
                case 'ms':
                    return this.set((date.getMilliseconds()) - value, type)
                case 'sec':
                    return this.set((date.getSeconds()) - value, type)
                case 'min':
                    return this.set((date.getMinutes()) - value, type)
                case 'hour':
                    return this.set((date.getHours()) - value, type)
                case 'day':
                    return this.set((date.getDate()) - value, type)
                case 'month':
                    return this.set((date.getMonth()) - value, type)
                case 'year':
                    return this.set((date.getFullYear()) - value, type)
                default:
                    return date
            }
        },
        /**
         * Get Locale date string YYYY-MM-DD
         * @returns {string} Locale date YYYY-MM-DD
         */
        getLocaleDateString() {
            const [day, month, year] = date.toLocaleDateString('fr-FR')?.split('/')
            return `${year.padStart(4, '0').substring(0, 4)}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        /**
         * Get Locale time string HH:MM
         * @returns {string} Locale date HH:MM
         */
        getLocaleTimeString() {
            return date.toLocaleTimeString('fr-FR')
        },
        /**
         * Get ISO date string YYYY-MM-DD
         * @deprecated
         * @returns {string} ISO date YYYY-MM-DD
         */
        getIsoDateString() {
            return date.toISOString().slice(0, 10)
        },
        /**
         * Get ISO time string YYYY-MM-DD
         * @deprecated
         * @returns {string} ISO date HH:MM
         */
        getIsoTimeString() {
            return date.toISOString().slice(11, 16)
        },
        /**
         * Get ISO date time string YYYY-MM-DDTHH:mm:ss.sssZ
         * @returns {string} ISO date YYYY-MM-DDTHH:mm:ss.sssZ
         */
        getIsoDateTimeString() {
            return date.toISOString()
        },
        /**
         * Get date from standard date string DD/MM/YYYY
         * @param {string} str DD/MM/YYYY
         * @returns {Date} Date
         */
        getDateFromStandardDateString(str) {
            const parts = str.split('/')
            return new Date(+parts[2], +parts[1] - 1, +parts[0])
        },
        /**
         * Get standard date string DD/MM/YYYY from date
         * @returns {string} DD/MM/YYYY
         */
        getStandardDateStringFromDate() {
            locale = 'fr-FR'
            return this.getCleanDate({ year: 'numeric', month: '2-digit', day: '2-digit' })
        },
        /**
         * Get age by birthdate
         * @returns {number} Age
         */
        getAge() {
            locale = 'fr-FR'
            return Math.abs(new Date(Date.now() - (date).getTime()).getUTCFullYear() - 1970)
        },
        /**
         * Is major ?
         * @returns {boolean} Is major
         */
        isMajor() {
            return this.getAge() >= 18
        },
    }
}

// Time(new Date()).test("new Date()")
// Time(new Date()).getCleanDate({ year: 'numeric', month: '2-digit', day: '2-digit' })
// Time(new Date('1997-02-21')).toIsoDate()
// Time(new Date('1997-02-21')).toIsoDateTime()
// Time(new Date()).add(1, "hour")
// Time(new Date()).set(1, 'hours')
// Time(new Date()).getDateFromStandardDateString("21/02/1997")
